import { useState, Fragment } from "react";
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
          <span data-tooltip-id="my-tooltip-1">
            <LuFilePlus2 />
          </span>
          <span data-tooltip-id="my-tooltip-2">
            <BsFolderPlus />
          </span>
        </div>
      )}
    </div>
    {isOpen && 
    <FileAndFolder data={explorerData}/>
    }
    </div>
  );
};

export default FileCollapse;
