const DATA = [
  {
    id: 1,
    label: "What is this",
  },
  {
    id: 2,
    label: "I don't know",
  },
  {
    id: 3,
    label: "Checkbox test",
  },
  {
    id: 4,
    label: "Very difficult",
  },
];

function CheckBoxText() {
  return (
    <>
      <div className="card">
        <CheckBox
          // checked
          label="Select All!"
          onChange={() => {}}
        />
        {DATA.map((task) => (
          <CheckBox
            key={task.id}
            // checked
            label={task.label}
            onChange={() => {}}
          />
        ))}
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
const CheckBox = ({ checked, onChange, label }) => (
  <div className="content">
    <label className="checkBox">
      <input checked={checked} onChange={onChange} type="checkbox" />
      <div className="transition" />
    </label>
    <h4>{label}</h4>
  </div>
);

export default CheckBoxText;
