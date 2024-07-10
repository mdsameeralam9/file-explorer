import React, { Fragment, useState } from "react";
import { FaFile } from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const FileAndFolder = ({ data={}, insertNode=()=>{}, rednderInput=false }) => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(null);

  const openCurrentFolder = (fileData) => {
    setCurrentSelected(fileData);
    setIsFolderOpen(prev => !prev);
    insertNode(fileData)
  }

 
  
  return (
    <Fragment>
      <div
        className={`file-and-folder`}
        onClick={() => openCurrentFolder(data)}
      >
        {data.isFolder && (
          <span>
            {isFolderOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        )}
        <span>{data.isFolder ? <IoIosFolderOpen /> : <FaFile />}</span>
        <span className={`${data.id === currentSelected?.id ? "selectedFolder" : ""}`}>{data.name}</span>
      </div>

      {rednderInput && <input />}

      {isFolderOpen &&
        data?.items?.length > 0 &&
        <div style={{paddingLeft: "20px"}}>
        {data.items.map((item) => <FileAndFolder data={item} key={item.id} />)}
        </div>
      }
    </Fragment>
  );
};

export default FileAndFolder;

//https://github.com/lukasbach/react-complex-tree
