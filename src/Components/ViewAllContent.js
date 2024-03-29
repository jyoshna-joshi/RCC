
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';

export default function AdvancedFilterDemo() {
    const [content, setContent] = useState(null);
    const [filters, setFilters] = useState(null);
    const [formats, setFormats] = useState();
    useEffect(() => {
        const fetchData = async () => {
            
            const params = new URLSearchParams(window.location.search);
            const creator = params.get("creator");
            const status = params.get("status");
            var url = 'http://44.202.58.84:3000/content/list-by-status?status=Approved';

            const response = await fetch(url);
            const data = await response.json();

            const formatResponse = await fetch('http://44.202.58.84:3000/template/types');
            const formatData = await formatResponse.json();
            
            setContent(getContent(data));            
            setFormats(formatData);
            initFilters();
        }

        // Call the function
        fetchData();
    }, []);

    const getContent = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date) || null;

            return d;
        });
    };

    const formatDate = (value) => {
        var date = new Date(value);
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const clearFilter = () => {
        initFilters();
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            title: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            description: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            publisher: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            creator: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            identifier: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            type: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
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
            <span>{type}</span>
        );
    };

    const typeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={formats} itemTemplate={typesItemTemplate} onChange={(e) => options.filterCallback(e.value)} placeholder="Any" className="p-column-filter" optionLabel="type"/>;
    };

    const typesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{option.type}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="dd/mm/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={content} paginator rows={10} dataKey="_id"
                filters={filters} header={header}
                emptyMessage="No content found.">
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: '12rem' }} />
                <Column field="creator" header="Uploaded By" filter filterPlaceholder="Search" style={{ minWidth: '12rem' }} />
                <Column field="description" header="Description" filter filterPlaceholder="Search by title" style={{ minWidth: '12rem' }} />
                <Column field="identifier" header="Identifier" filter filterPlaceholder="Search by title" style={{ minWidth: '12rem' }} />
                <Column field="publisher" header="Publisher" filter filterPlaceholder="Search by title" style={{ minWidth: '12rem' }} />
                <Column header="Type" filterField="type" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={typeBodyTemplate} filter filterElement={typeFilterTemplate} />                
            </DataTable>
        </div>
    );
}
