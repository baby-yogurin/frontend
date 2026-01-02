import Button from "../../components/common/Button";

const handleClick = () => {
  console.log("handle");
};

export default function MainPage() {
  return (
    <div className="flex itmes-center justify-center gap-12 m-5">
      <Button variant="cancelled" onClick={handleClick}>
        Cancel
      </Button>
      <Button onClick={handleClick}>Save</Button>
    </div>
  );
}
