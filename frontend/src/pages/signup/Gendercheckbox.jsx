function Gendercheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer mr-2">
          <span className="label-text mr-2">Male</span>
          <input type="checkbox"  className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-2">Female</span>
          <input type="checkbox"  className="checkbox" />
        </label>
      </div>
    </div>
  );
}

export default Gendercheckbox;
