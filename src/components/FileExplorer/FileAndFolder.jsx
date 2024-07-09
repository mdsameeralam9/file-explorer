import React, { Fragment, useState } from "react";
import { FaFile } from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const FileAndFolder = ({ data = {} }) => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  
  return (
    <Fragment>
      <div
        className={`file-and-folder`}
        onClick={() => setIsFolderOpen((prev) => !prev)}
      >
        {data.isFolder && (
          <span>
            {isFolderOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        )}
        <span>{data.isFolder ? <IoIosFolderOpen /> : <FaFile />}</span>
        <span>{data.name}</span>
      </div>

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
