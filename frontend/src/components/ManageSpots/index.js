import { useEffect } from "react";
import { getUserSpots } from "../../store/user";
import { useDispatch } from "react-redux";

const ManageSpots = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSpots = () => {
      dispatch(getUserSpots());
    }

    getSpots();
  }, [dispatch]);

  return (
    <div>
      <h2>Working Component</h2>
    </div>
  );
};

export default ManageSpots;