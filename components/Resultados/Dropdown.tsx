import SelectVehicleType from "./SelectVehicleType";

type DropdownProps = {
  classNames?: string;
  titleFont?: string;
  title: string;
  options: {
    name: string;
    value: string;
  }[];
  onClick?: (value: string) => void;
  selectedName: string;
  type: "normal" | "vehicle-type";
};

const Dropdown = ({
  classNames,
  titleFont,
  title,
  options,
  onClick,
  selectedName,
  type = "normal",
}: DropdownProps) => {
  return (
    <section className={`${classNames}`}>
      <h3 className={titleFont}>{title}</h3>
      {type === "vehicle-type" && (
        <SelectVehicleType
          options={options}
          onClick={onClick}
          name={selectedName}
          font={titleFont}
        />
      )}
    </section>
  );
};

export default Dropdown;
