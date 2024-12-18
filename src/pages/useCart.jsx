import { useDispatch } from "react-redux";
import { AuthDailog } from "../redux/slice";
import { useCookies } from "react-cookie";
import axios from "axios";

const useCart = () => {
	const dispatch = useDispatch();
	const [cookies] = useCookies(['token']);

	const cartAction = async (productId, action) => {

		let result = false
		if (cookies.token) {
			const response = await axios.post('/api/cart', {}, { params: { t: Date.now(), productId, action } });
			result = response?.data?.success ? response.data.success : false;
			console.log(result);
			
		} else {
			dispatch(AuthDailog(true))
		}
		return result;
	};

	return { cartAction };
};

export default useCart;