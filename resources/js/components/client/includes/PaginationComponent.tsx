import React from 'react';
import {Links, Meta} from "../../../types/globalTypes";
import {Inertia} from "@inertiajs/inertia";
import route from "ziggy-js";

interface Props {
  links: Links,
  meta: Meta,
}


function PaginationComponent({meta, links}: Props) {
  console.log(links)
  const isButtonDisabled = () => {
    if (links.prev === null) {
      return true
    }
  }

  const navigateToPage = (url: any) => {
    Inertia.get(url, undefined, {
      preserveState: false
    })
  }

  const paginationLinks = meta.links.map((link) => {
    if (link.label === "Next &raquo;" || link.label === "&laquo; Previous") {
      return (
        <span key={link.label}/>
      )
    }
    return (
      <li key={link.label}>
        <a href={link.url}>
          <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600">{link.label}</button>
        </a>
      </li>
    )
  })
  return (
    <div className="container flex justify-center mx-auto py-5">
      <ul className="flex">
        <li>
          <a href={links.prev}
             className={`${links.prev === null ? "text-gray-100 hover:text-gray-100" : "text-black hover:text-black font-bolder"}`}>
            <button
              type={'button'}
              disabled={links.prev === null}
              className={`${links.prev === null ? "h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 disabled" : "h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"}`}>
              Prev
            </button>
          </a>
        </li>
        {paginationLinks}
        <li>
          <a href={links.next}
             className={`${links.next === null ? "text-gray-100 hover:text-gray-100" : "text-black hover:text-black font-bolder"}`}>
            <button
              type={'button'}
              disabled={links.next === null}
              className={`${links.next === null ? "h-10 px-5 text-gray-600 bg-white border border-r-1 border-gray-600 disabled" : "h-10 px-5 text-gray-600 bg-white border border-r-1 border-gray-600 hover:bg-gray-100"}`}>
              Next
            </button>
          </a>
        </li>
      </ul>
    </div>

  );
}

export default PaginationComponent;
