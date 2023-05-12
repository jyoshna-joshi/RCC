import React,{ useState, useEffect } from 'react';
import {
    CFormSelect,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CButton,
    CRow,
    CAlert
} from '@coreui/react';
import { cilTrash, cilPencil } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function FormControl() {
    const URL_SAVE_TEMPLATE = "http://44.202.58.84:3000/template/add-update";

    const [templateName, setTemplateName] = useState(null);
    const [action, setAction] = useState(null);
    const [toast, addToast] = useState()

    const path = window.location.pathname;
    const searchPath = new URLSearchParams(window.location.search);
    const templateType = searchPath.get("type");
    const urlAction = path.substring(path.lastIndexOf('/') + 1);
    const [visibleModal, setVisibleModal] = useState(false)
    const [colorAlert, setColorAlert] = useState()

    const [inputFields, setInputFields] = useState([
        { title: '', field: '', placeholder: '', type: '' }
    ])

    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {   
            setAction(urlAction);         
            if (['edit','view'].includes(urlAction)) {        
                const URL_GET_TEMPLATE = "http://44.202.58.84:3000/template/fields?type=" + templateType;
        
                axios.get(URL_GET_TEMPLATE)
                    .then(res => {
                        const data = res.data;
                        setInputFields(getFields(data.fields));  
                        setTemplateName(data.type);                        
                        console.log(data);
                        console.log(data.type);
                    })
                    .catch((err) =>
                        alert(err));        
            }
        }

        fetchData();
    }, []);

    const getFields = (data) => {
        return [...(data || [])].map((d) => {
            d.type = d.type.charAt(0).toUpperCase() + d.type.slice(1);
            return d;
        });
    };

    const handleTemplateChange = (event) => {
        setTemplateName(event.target.value);
    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.id] = event.target.value;
        setInputFields(data);
    }

    const addFields = (e) => {
        e.preventDefault();
        let newfield = { title: '', field: '', placeholder: '', type: '' };
        setInputFields([...inputFields, newfield]);
    }

    const removeField = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    const submit = (e) => {
        e.preventDefault();
        var data;
        
        if (inputFields.length > 0) {
            data = '{"type": "' + templateName + '", "fields": [';
            for (var i = 0; i < inputFields.length; i++) {
                var field = '';
                if (i > 0) {
                    field = field + ",";
                }
                field = field + '{                                       ' +
                    '"field": "' + inputFields[i].field + '",' +
                    '"title": "' + inputFields[i].title + '",' +
                    '"placeholder": "' + inputFields[i].placeholder + '",' +
                    '"type": "' + inputFields[i].type + '"' +
                    '}';
                data = data + field;
            }
            data = data + ']}';
        }
        data = JSON.parse(data);
    
        axios
            .post(URL_SAVE_TEMPLATE, data)
            .then((res) => {
                if (action === 'edit') {
                    addToast("Template " + templateName + " updated successfully!");
                    setColorAlert('success');
                }
                else if (action === 'new') {
                    addToast("Template " + templateName + " created successfully!");
                    setColorAlert('success');
                }            
            })
            .catch((err) => {
                alert("Error Occurred. Please try again!");
                setColorAlert('danger');
            });
            setVisibleModal(true);
            //navigate("/template/all");
            //return;    
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <CButton onClick={() => {navigate('/template/all')}} variant="outline">All Templates</CButton>
                        {action === 'view' 
                        ? <CButton onClick={() => {navigate('/template/edit?type='+ templateName); window.location.reload(false);}} variant="outline">
                            <CIcon icon={cilPencil} className="me-2" />
                          </CButton>
                        : null
                        }
                    </CCardHeader> 
                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel htmlFor="templateName">Template Name</CFormLabel>
                                {action === 'new' 
                                    ? <CFormInput
                                        type="text"
                                        id="templateName"
                                        placeholder="Sample Template"
                                        onChange={event => handleTemplateChange(event)}
                                    /> 
                                    : <CFormInput
                                        type="text"
                                        id="templateName"
                                        value={templateName}
                                        readOnly
                                    />}
                                
                            </div>
                            <CCard className="mb-4">
                                <CCardHeader>
                                    <strong>Template Fields</strong>
                                </CCardHeader>
                                <CCardBody>
                                    {inputFields.map((input, index) => {
                                        return (
                                            <div key={index}>
                                                <CRow className="g-5">
                                                    <CCol sm={3}>
                                                        <CFormLabel htmlFor="field">Field</CFormLabel>
                                                        {action === 'view' 
                                                            ? <CFormInput id="field" value={input.field} readOnly/>
                                                            : <CFormInput id="field" placeholder="Field" value={input.field} onChange={event => handleFormChange(index, event)} />
                                                        }
                                                    </CCol>
                                                    <CCol sm={3}>
                                                        <CFormLabel htmlFor="title">Title</CFormLabel>
                                                        {action === 'view' 
                                                            ? <CFormInput id="title" value={input.title} readOnly/>
                                                            : <CFormInput id="title" placeholder="Title" value={input.title} onChange={event => handleFormChange(index, event)} />
                                                        }
                                                    </CCol>
                                                    <CCol sm={3}>
                                                        <CFormLabel htmlFor="placeholder">Placeholder</CFormLabel>
                                                        {action === 'view' 
                                                            ? <CFormInput id="placeholder" value={input.placeholder} readOnly/>
                                                            : <CFormInput id="placeholder" placeholder="Placeholder" value={input.placeholder} onChange={event => handleFormChange(index, event)} />
                                                        }
                                                    </CCol>
                                                    <CCol sm={2}>
                                                        <CFormLabel htmlFor="type">Datatype</CFormLabel>
                                                        {action === 'view' 
                                                            ? <CFormInput id="type" value={input.type} readOnly/>
                                                            : <CFormSelect id="type" value={input.type} onChange={event => handleFormChange(index, event)}>
                                                                    <option>Choose...</option>
                                                                    <option value="Text">Text</option>
                                                                    <option value="Number">Number</option>
                                                                    <option value="Date">Date</option>
                                                              </CFormSelect>
                                                        }
                                                    </CCol>
                                                    {action === 'view' 
                                                    ? <div></div>
                                                    : <CCol sm={1}>
                                                            <div style={{ height: "30px" }}></div>
                                                            <CButton onClick={() => removeField(index)} color="danger" variant="outline">
                                                                <CIcon icon={cilTrash} className="me-2" />
                                                            </CButton>
                                                      </CCol>
                                                    }
                                                </CRow>
                                            </div>
                                        )
                                    })}
                                    <div style={{ height: "20px" }}></div>
                                    {action === 'view' 
                                    ? <div></div>
                                    : <CCol xs={12}>
                                            <CButton onClick={addFields} color="success" variant="outline">Add Field</CButton>
                                      </CCol>
                                    }
                                </CCardBody>
                            </CCard>
                            {action === 'view' 
                            ? <div></div>
                            : <CCol xs={12}>
                                <CButton type="submit" onClick={submit}>Submit</CButton>   
                                <CAlert color={colorAlert} visible={visibleModal}>
                                    {toast}
                                </CAlert>
                              </CCol>
                            }
                        </CForm>

                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
