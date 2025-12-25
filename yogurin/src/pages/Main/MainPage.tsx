import { useNavigate } from "react-router-dom";
import ActionCard from "../../components/common/ActionCard";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 space-y-4">
      <ActionCard
        title="Sleep"
        type="sleep"
        subtitle="Track Sleep Time"
        onClick={() => navigate("/sleep")}
      />
      <ActionCard
        title="Feeding"
        type="feeding"
        subtitle="Track Feeding Time"
        onClick={() => navigate("/feeding")}
      />
      <ActionCard
        title="Nappy"
        type="nappy"
        subtitle="Track Nappy Time"
        onClick={() => navigate("/nappy")}
      />
    </div>
  );
}
