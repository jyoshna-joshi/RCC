
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { useNavigate } from "react-router-dom";

export default function AdvancedFilterDemo() {
    let navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [filters, setFilters] = useState(null);


    useEffect(() => {
        const fetchata = async () => { 

            const response = await fetch('http://44.202.58.84:3000/template/types');
            const data = await response.json();
            
            setContent(data);
            initFilters();
        }

        // Call the function
        fetchata();
    }, []);

    const newTemplate = () => {
        navigate("/template/new");
        return;
    };

    const initFilters = () => {
        setFilters({
            type: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
    };

    const renderHeader = () => {
        return (
            <div>
                <Button type="button" icon="pi pi-plus" label="New Template" outlined onClick={newTemplate} />
            </div>
        );
    };    

    const viewDetailsTemplate = (rowData) => {
        return <Button type="button" icon="pi pi-external-link" onClick={() => {navigate('/template/view?type='+ rowData.type)}} rounded outlined/>
    };

    const editDetailsTemplate = (rowData) => {
        return <Button type="button" icon="pi pi-pencil" onClick={() => {navigate('/template/edit?type='+ rowData.type)}} rounded outlined/>
    };

    const activeTemplate = (rowData) => {
        return <Button type="button" icon={rowData.active === 'Active' ? "pi pi-check" : "pi pi-times"} severity={rowData.active === 'Active' ? "success" : "danger"} onClick={() => activateTemplate(rowData.type, rowData.active)} rounded/>
    };

    const activateTemplate = (type) => {
        var data;
        
        // if (inputFields.length > 0) {
        //     data = '{"type": "' + templateName + '", "fields": [';
        //     for (var i = 0; i < inputFields.length; i++) {
        //         var field = '';
        //         if (i > 0) {
        //             field = field + ",";
        //         }
        //         field = field + '{                                       ' +
        //             '"field": "' + inputFields[i].field + '",' +
        //             '"title": "' + inputFields[i].title + '",' +
        //             '"placeholder": "' + inputFields[i].placeholder + '",' +
        //             '"type": "' + inputFields[i].type + '"' +
        //             '}';
        //         data = data + field;
        //     }
        //     data = data + ']}';
        // }
        // data = JSON.parse(data);
    
        // axios
        //     .post(URL_SAVE_TEMPLATE, data)
        //     .then((res) => {
        //         if (action === 'edit') {
        //             addToast("Template " + templateName + " updated successfully!");
        //             setColorAlert('success');
        //         }
        //         else if (action === 'new') {
        //             addToast("Template " + templateName + " created successfully!");
        //             setColorAlert('success');
        //         }            
        //     })
        //     .catch((err) => {
        //         alert("Error Occurred. Please try again!");
        //         setColorAlert('danger');
        //     });
        //     setVisibleModal(true);
            //navigate("/template/all");
            //return;    
    }

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={content} paginator rows={10} dataKey="_id"
                filters={filters} header={header}
                emptyMessage="No content found.">
                <Column field="type" header="Template Type" filter filterPlaceholder="Search by type" style={{ minWidth: '12rem' }} />
                <Column size="sm" body={activeTemplate} header="Active"></Column>
                <Column size="sm" body={viewDetailsTemplate} header=""></Column>
                <Column size="sm" body={editDetailsTemplate} header=""></Column>
            </DataTable>
        </div>
    );
}