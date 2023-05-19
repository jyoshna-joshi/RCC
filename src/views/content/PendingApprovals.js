import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { useNavigate } from "react-router-dom";

export default function PendingApproval() {
    const [content, setContent] = useState(null);
    const [filters, setFilters] = useState(null);
    const [formats, setFormats] = useState();

    const [statuses] = useState(['Pending']);
    const navigate = useNavigate();

    const getSeverity = (status) => {
        switch (status) {
            case 'Pending':
                return 'warning';
        }
    };

    useEffect(() => {
        const fetchata = async () => {
            const response = await fetch('http://44.202.58.84:3000/content/list-by-status?status=Pending');
            const data = await response.json();

            const formatResponse = await fetch('http://44.202.58.84:3000/template/types');
            const formatData = await formatResponse.json();

            setContent(getContent(data));
            setFormats(getFormatData(formatData));

            initFilters();
        }

        // Call the function
        fetchata();
    }, []);

    const getContent = (data) => {
        return [...(data || [])].map((d) => {
            d.timestamp = d.timestamp ? new Date(new Date(parseInt(d.timestamp)).toISOString().split('T')[0]) : '';
            d.type = d.type.replace(/([A-Z])/g, ' $1').trim();
            var json = '{"type":"' + d.type + '"}';
            d.type = JSON.parse(json);
            return d;
        });
    };

    const getFormatData = (data) => {
        return [...(data || [])].map((d) => {
            d.type = d.type.replace(/([A-Z])/g, ' $1').trim();
            return d;
        });
    };

    const formatDate = (value) => {
        if (value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        }
        return null;
    };

    const clearFilter = () => {
        initFilters();
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            title: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            type: { value: null, matchMode: FilterMatchMode.IN },
            timestamp: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            status: { value: null, matchMode: FilterMatchMode.IN },
        });
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
            </div>
        );
    };

    const typeBodyTemplate = (rowData) => {
        const type = rowData.type;

        return (
            <span>{type.type}</span>
        );
    };

    const typeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={formats} itemTemplate={typesItemTemplate} onChange={(e) => options.filterCallback(e.value)} placeholder="Any" className="p-column-filter" optionLabel="type" />;
    };

    const typesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{option.type}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.timestamp);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="dd/mm/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <MultiSelect value={options.value}
            options={statuses}
            itemTemplate={statusItemTemplate}
            onChange={(e) => options.filterCallback(e.value)}
            placeholder="Any"
            className="p-column-filter" />;
    };

    const statusItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{option}</span>
            </div>
        );
    };

    const viewDetailsTemplate = (rowData) => {
        console.log(rowData.timestamp);
        return <Button type="button"
            icon="pi pi-external-link"
            link onClick={() => navigate("/admin/approve", { state: { id: rowData._id } })} />
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={content} paginator rows={10} dataKey="_id"
                filters={filters} header={header}
                emptyMessage="No content found.">
                <Column header="Date" filterField="timestamp" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Type" filterField="type" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={typeBodyTemplate} filter filterElement={typeFilterTemplate} />
                <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: '12rem' }} />
                <Column filterField="status" header="Status" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column body={viewDetailsTemplate} header="">
                </Column>
            </DataTable>
        </div>
    );
}

