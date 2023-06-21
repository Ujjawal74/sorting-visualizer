const ToggleBtn = ({ setFlag, disabled }) => {
  const flagHandler = (e) => {
    if (e.target.checked) {
      setFlag(1);
    } else {
      setFlag(0);
    }
  };

  return (
    <>
      <label className="switch">
        <input onClick={flagHandler} type="checkbox" disabled={disabled} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleBtn;

/*
Created By: Connect/Follow me on LinkedIn.
=> https://www.linkedin.com/in/ujjawal-biswas-b40611142/
          _   _                         _  _      _                           
  _   _  (_) (_)  __ _ __      __ __ _ | || |__  (_) ___ __      __ __ _  ___ 
 | | | | | | | | / _` |\ \ /\ / // _` || || '_ \ | |/ __|\ \ /\ / // _` |/ __|
 | |_| | | | | || (_| | \ V  V /| (_| || || |_) || |\__ \ \ V  V /| (_| |\__ \
  \__,_|_/ |_/ | \__,_|  \_/\_/  \__,_||_||_.__/ |_||___/  \_/\_/  \__,_||___/
       |__/|__/                                                                                                                                                                               
*/
