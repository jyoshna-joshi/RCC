import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const items = ["Pdf", "cd", "Others"];

const TemplateForm = () => {
        const [selectedItem, setSelectedItem] = useState("Select Template Type");
    return (
        <>
          
            <Dropdown>
                <h3>What type of content you want to upload?</h3>
                <Dropdown.Toggle variant="success"> {selectedItem}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {items.map((item) => (
                        <Dropdown.Item onClick={() => setSelectedItem(item)}>
                            {item}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <pre>You choose: {selectedItem}</pre>
            
        </>
    );
};

export default TemplateForm;
