import CheckIn from "../../(components)/checkin";
import CheckOut from "../../(components)/checkout";

export default function Check() {
    return (
      <div className="space-y-8">
        <CheckIn />
        <CheckOut />
      </div>  
    );
}