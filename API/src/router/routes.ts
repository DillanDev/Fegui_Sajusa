import { CustomerRoute } from './customer.route';
import { AuthRoute} from './auth.route';
import { ProductRoute } from './product.route';


export class Route{

    public CustomerRoute: CustomerRoute = new CustomerRoute();
    public AuthRoutes: AuthRoute = new AuthRoute();
    public ProductRoutes: ProductRoute = new ProductRoute();
}