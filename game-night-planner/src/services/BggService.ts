import { ClientBuilder } from "./ClientBuilder";
export abstract class BggService {
    public static async getUserGames() {
        var client = ClientBuilder.getClient();
        
        var request = await client.get("users/games");
        return (request.data);
    }
}