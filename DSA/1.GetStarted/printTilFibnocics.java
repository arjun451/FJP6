import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
       Scanner scn = new Scanner(System.in);
       int n= scn.nextInt();
       int f1=0,f2=1;
       for(int i=1;i<=n;i++)
       {
         if(i>2)
         {
           System.out.println(f1+f2);
           int t=f1+f2;
           f1=f2;
           f2=t;
         }
         else{
           if(i==1)
           {
             System.out.println(f1);
           }
           else
           {
             System.out.println(f2);
           }
         }
       }
   }
  }