'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const router =  useRouter();

  
  const person  =  3;
 
   
  return (
  <div>
    <ul>  
      <Link href={"/dashboard/"+person}>  DashBoard</Link>
      {/* <Link href={`/dashboard/${person}`}>  DashBoard</Link> */}
    </ul>
  </div>
  );
}
