import { ClientBuilder } from "./ClientBuilder";
export abstract class UserService {
    public static async login() {
        var client = ClientBuilder.getClient();
        
        var request = await client.get("login");
        return (request.status < 400);
    }
}