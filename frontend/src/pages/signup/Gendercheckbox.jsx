function Gendercheckbox({onCheckBoxChange,selectedGender}) {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label cursor-pointer mr-2 ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text mr-2">Male</span>
          <input type="checkbox"  className="checkbox border-slate-900" checked={selectedGender === 'male' } onChange={()=> onCheckBoxChange("male")} />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer mr-2 ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text mr-2">Female</span>
          <input type="checkbox"  className="checkbox  border-slate-900" checked={selectedGender === 'female' } onChange={()=> onCheckBoxChange("female")} />
        </label>
      </div>
    </div>
  );
}

export default Gendercheckbox;
