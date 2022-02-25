import User from "../entities/User";

const userMock: User[] = [
    {
        id: 2231,
        name: "Ekalavya Shukla DC",
        email: "ekalavya_shukla_dc@padberg.co",
        gender: "female",
        status: "inactive",
    },
    {
        id: 2230,
        name: "Sloka Guneta DO",
        email: "guneta_do_sloka@stroman-koepp.com",
        gender: "female",
        status: "active",
    },
    {
        id: 2229,
        name: "Rageswari Bandopadhyay",
        email: "bandopadhyay_rageswari@nikolaus-huels.org",
        gender: "female",
        status: "inactive",
    },
    { id: 2228, name: "Suma Dubashi", email: "suma_dubashi@stroman.net", gender: "male", status: "inactive" },
    {
        id: 2225,
        name: "Aayushmaan Joshi",
        email: "joshi_aayushmaan@wiegand-runolfsdottir.biz",
        gender: "male",
        status: "active",
    },
    {
        id: 2224,
        name: "Devi Prajapat",
        email: "prajapat_devi@torp-jacobs.name",
        gender: "female",
        status: "active",
    },
    {
        id: 2223,
        name: "Bilva Kapoor VM",
        email: "vm_kapoor_bilva@orn.biz",
        gender: "female",
        status: "active",
    },
    { id: 2222, name: "Chetan Nayar", email: "chetan_nayar@wilkinson.name", gender: "male", status: "active" },
    {
        id: 2221,
        name: "Devangana Bhattathiri",
        email: "devangana_bhattathiri@damore-haag.biz",
        gender: "male",
        status: "active",
    },
    {
        id: 2220,
        name: "Ravi Chaturvedi V",
        email: "chaturvedi_v_ravi@wolf.net",
        gender: "female",
        status: "inactive",
    },
    {
        id: 2219,
        name: "Chandran Pothuvaal",
        email: "chandran_pothuvaal@haag.name",
        gender: "female",
        status: "active",
    },
    {
        id: 2218,
        name: "Aayushmaan Kocchar III",
        email: "kocchar_iii_aayushmaan@gottlieb-ondricka.co",
        gender: "male",
        status: "active",
    },
    { id: 2217, name: "Nimit Adiga", email: "adiga_nimit@kozey.net", gender: "female", status: "inactive" },
    {
        id: 2216,
        name: "Deeptimoyee Kaul",
        email: "deeptimoyee_kaul@moore.info",
        gender: "male",
        status: "active",
    },
    { id: 2215, name: "Narayan Khan", email: "khan_narayan@jones.info", gender: "female", status: "active" },
    {
        id: 2213,
        name: "Mrs. Digambara Arora",
        email: "mrs_digambara_arora@lind-padberg.io",
        gender: "female",
        status: "active",
    },
    {
        id: 2212,
        name: "Ramesh Arora",
        email: "arora_ramesh@dickinson-pouros.name",
        gender: "male",
        status: "inactive",
    },
    {
        id: 2211,
        name: "Amrita Gill",
        email: "amrita_gill@predovic-ortiz.co",
        gender: "female",
        status: "active",
    },
    {
        id: 2210,
        name: "Narayan Kocchar",
        email: "kocchar_narayan@leffler-damore.biz",
        gender: "male",
        status: "active",
    },
    {
        id: 2209,
        name: "Pres. Chandranath Agarwal",
        email: "chandranath_pres_agarwal@torp-abbott.name",
        gender: "male",
        status: "inactive",
    },
];
export function getUsers(filterValue: string = "") {
    if (filterValue) {
        return userMock.filter((user) => user.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    return userMock;
}
