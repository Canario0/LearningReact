import User from "../entities/User";

export function getUsers(filterValue: string = ""): Promise<Response> {
    let url = "https://gorest.co.in/public/v2/users";
    if (filterValue) {
        url += `?name=${filterValue}`;
    }
    return window.fetch(url);
}
