import React from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
import {fireproducts} from "../firecommerce-products";
function Homepage() {
    async function adddata() {
        try {
            await addDoc(collection(fireDB, "users"), { name: 'Thirimon', age: '26' })
        } catch (error) {
            console.log(error)
        }
    }
    async function getdata() {
        try {
            const users = await getDocs(collection(fireDB, "users"), { name: 'Thirimon', age: '26' })
            const usersArray = []
            users.forEach((doc) => {

                const obj = {
                    id: doc.id,
                    ...doc.data()
                }
                usersArray.push(obj)
            });
            console.log(usersArray)

        } catch (error) {
            console.log(error)
        }
    }

     function addProductsData() {
        fireproducts.map(async(product)=>{
            try {
                await addDoc(collection(fireDB, "products"), product);
            } catch (error) {
                console.log(error)
            }
        })
    }
    return (
        <Layout>
            <h1>Home</h1>

            <button onClick={adddata}>add data to FireBase</button>
            <button onClick={getdata}>Get data from FireBase</button>
            <button onClick={addProductsData}>Add Products data to FireBase</button>
        </Layout>
    )
}
export default Homepage