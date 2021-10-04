import { UserController } from "../controllers/UserController";


export class Route_user {

    public user: UserController = new UserController()
    

    public routes_user(app: any): void {
        app.route('/user').post(this.user.saveUser);
        app.route('/user').get(this.user.getUser);
        app.route('/user/:id').get(this.user.getUserId);
        app.route('/user/:id').put(this.user.updateUserId);
        app.route('/user/:id').delete(this.user.deleteUserId);
    }

 
}