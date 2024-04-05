export type User = {
	_id : string;
	email: string;
	name: string;
	addressLine1: string;
	city: string;
	country: string;
};


export type MenuItem = {
	_id : string;
	name : string;
	price: string;
};

export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
}


export type OrderStatus = 
| "placed"
| "paid"
| "inprogress"
| "outForDelivery"
| "deliverd";


export type Order = {
	_id : string;
	restaurant : Restaurant;
	user : User;
	cartItems: {
		menuItemId: string;
		name :string;
		quantity: string;
	}[];

	deliveryDetails: {
		name: string;
		addressLine1 : string;
		city: string;
		email: string;
	};

	totalAmount : number;
	status: OrderStatus
	createdAt : string;
	restaurantId : string;
};

export type RestaurantSearchResposne = {
	data :Restaurant[];
	pagiantion: {
		total: number;
		page: number;
		pages: number;
	};
};

