import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import {PDFViewer} from '@logicamente.info/react-pdf-viewer';

function ApproveReject() {
	const { state } = useLocation();
	const { id, date, title } = state;
	console.log(id);
	console.log(title);
	console.log(date)

}

export default ApproveReject