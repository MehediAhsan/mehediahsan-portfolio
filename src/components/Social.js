import React from 'react';

const Social = () => {
    return (
        <div className="grid grid-cols-1 fixed top-1/2 -translate-y-1/2 left-5 z-50 gap-5">
      <a href="https://github.com/mehediahsan">
        <div>
          <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/mehediahsan/">
        <div>
          <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" />
        </div>
      </a>
      <a href="mailto:mdmehedicse01@gmail.com">
        <div>
            <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="" />
        </div>
      </a>
      <a href="https://twitter.com/mehediahsan19">
        <div>
          <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3670/3670124.png" alt="" />
        </div>
      </a>
    </div>
    );
};

export default Social;