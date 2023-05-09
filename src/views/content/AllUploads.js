
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

export default function AdvancedFilterDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formats] = useState([
        'AdvertisementNewspaper',
        'ArticleJournal',
        'BookTechnical',
        'AdvertisementJournal'
    ]);
    const [statuses] = useState(['Approved', 'Rejected', 'Pending']);

    const getSeverity = (status) => {
        switch (status) {
            case 'Rejected':
                return 'danger';

            case 'Approved':
                return 'success';

            case 'Pending':
                return 'warning';
        }
    };

    useEffect(() => {
        const fetchata = async () => {

            const response = await fetch(
                'http://44.202.58.84:3000/listByStatus?status=approved');
            const data = [
                { 'status': 'Approved', 'title': 'AdvertisementNewspaper', 'format': 'AdvertisementNewspaper', 'date': '2023-01-01', 'rowColor': 'success' },
                { 'status': 'Approved', 'title': 'AdvertisementNewspaper', 'format': 'AdvertisementNewspaper', 'date': '2023-01-01', 'rowColor': 'success' },
                { 'status': 'Approved', 'title': 'AAA', 'format': 'ArticleJournal', 'date': '2023-01-01', 'rowColor': 'success' },
                { 'status': 'Approved', 'title': 'AAA', 'format': 'ArticleJournal', 'date': '2023-01-01', 'rowColor': 'success' },
                { 'status': 'Approved', 'title': 'AAA', 'format': 'BookTechnical', 'date': '2023-01-01', 'rowColor': 'success' },
                { 'status': 'Approved', 'title': 'AAA', 'format': 'BookTechnical', 'date': '2023-01-01', 'rowColor': 'success' },
                { 'status': 'Approved', 'title': 'AAA', 'format': 'AdvertisementJournal', 'date': '2023-01-01', 'rowColor': 'success' },
                { 'status': 'Rejected', 'title': 'AAA', 'format': 'AdvertisementJournal', 'date': '2023-01-01', 'rowColor': 'danger' },
                { 'status': 'Rejected', 'title': 'AAA', 'format': 'ArticleJournal', 'date': '2023-01-01', 'rowColor': 'danger' },
                { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementNewspaper', 'rowColor': 'warning', 'date': '2023-01-01'},
                { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor': 'warning', 'date': '2023-01-01' },
                { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor': 'warning', 'date': '2023-01-01' },
                { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor': 'warning', 'date': '2023-01-01' },
                { 'status': 'Pending', 'title': 'AAA', 'format': 'BookTechnical', 'rowColor': 'warning', 'date': '2023-01-01' },
                { 'status': 'Pending', 'title': 'AAA', 'format': 'ArticleJournal', 'rowColor': 'warning', 'date': '2023-01-01' },
            ];

            //use only 3 sample data
            setCustomers(getCustomers(data));
            initFilters();
        }

        // Call the function
        fetchata();
    }, []);

    const getCustomers = (data) => {
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

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const clearFilter = () => {
        initFilters();
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            title: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            format: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
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

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.format;

        return (
            // <div className="flex align-items-center gap-2">
                <span>{representative}</span>
            // </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={formats} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{option}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="dd/mm/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <MultiSelect value={options.value} 
        options={statuses} 
        itemTemplate={representativesItemTemplate} 
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

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} loading={loading} dataKey="id"
                filters={filters} header={header}
                emptyMessage="No customers found.">
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: '12rem' }} />
                <Column filterField="status" header="Status" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column header="Type" filterField="format" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                {/* <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate}
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                
                
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />                
                
                
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />                
                
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} /> */}
            </DataTable>
        </div>
    );
}
