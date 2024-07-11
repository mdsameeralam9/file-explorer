import { useState, Fragment, useId } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { LuFilePlus2 } from "react-icons/lu";
import { BsFolderPlus } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import FileAndFolder from "./FileAndFolder";
import explorer from "./data";


const FileCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [explorerData, setExplorerData] = useState({...explorer})
  const [activeData, setActiveData] = useState(null);
  const [showInput, setShowInput] = useState(false);
  

  const addRemove = (e,type) => {
    e.stopPropagation();

    setShowInput(true)
    let newObj = {
      id: Math.random()*1000,
      name: 'newAction',
      isFolder: type === "folder",
      items: []
    }

  }

  return (
    <div className="fileCollapse-component">
    <div
      className={`file-collapse ${!isOpen && "bor-blue"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="left">
        <span>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
        <span className="feLabel">FILE-EXPLORER</span>
      </div>

      {isOpen && (
        <div className="right">
          <Tooltip id="my-tooltip-1" place="bottom" content="New File" />
          <Tooltip id="my-tooltip-2" place="bottom" content="New Folder" />
          <span data-tooltip-id="my-tooltip-1" onClick={(e) => addRemove(e,"file")}>
            <LuFilePlus2 />
          </span>
          <span data-tooltip-id="my-tooltip-2" onClick={(e) => addRemove(e,"folder")}>
            <BsFolderPlus />
          </span>
        </div>
      )}
    </div>
    {isOpen && 
    <FileAndFolder data={explorerData} insertNode={setActiveData} rednderInput={showInput}/>
    }
    </div>
  );
};

export default FileCollapse;
