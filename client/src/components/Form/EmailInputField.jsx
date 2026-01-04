const EmailInputField = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="label">
        Email <sup className="text-red-600">*</sup>
      </label>

      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your email"
        className="input"
      />

      {error && <span className="font-medium text-[12px] text-red-600">{error}</span>}
    </div>
  );
};

export default EmailInputField;
