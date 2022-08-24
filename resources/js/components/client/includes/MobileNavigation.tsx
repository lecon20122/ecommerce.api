import React from 'react';

function MobileNavigation() {
  return (
    <div className="btm-nav btm-nav-sm md:hidden">
      <button>
        <i className="text-gray-400 w-5 pi pi-home text-black"/>
        <span className="btm-nav-label">Home</span>
      </button>
      <button className="active">
        <i className="text-gray-400 w-5 pi pi-shopping-cart text-black"/>
        <span className="btm-nav-label">Cart</span>
      </button>
      <button>
        <i className="text-gray-400 w-5 pi pi-user text-black"/>
        <span className="btm-nav-label">Me</span>
      </button>
    </div>
  );
}

export default MobileNavigation;
