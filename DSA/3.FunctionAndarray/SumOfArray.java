import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    Scanner scn =new Scanner(System.in);
    int n1=scn.nextInt();
    int a[]=new int[n1];
    for(int i=0;i<n1;i++)
    {
        a[i]=scn.nextInt();
    }
    int n2=scn.nextInt();
    int b[]=new int[n2];
    for(int i=0;i<n2;i++)
    {
        b[i]=scn.nextInt();
    }
    int n;
    if(n1>n2)
    n=n1;
    else
    n=n2;
    int[] ar=new int[n];
    int c=0;
    int i=n1-1,j=n2-1;
    n--;
    while(i>=0&&j>=0)
    {
        int s=a[i]+b[j]+c;
        ar[n]=s%10;
        s=s/10;
        c=s;
        i--;j--;n--;
    }
    while(j>=0)
    {
       int s=c+b[j];
       ar[n]=s%10;
       s=s/10;
       c=s;
       n--;
       j--;
    }
    while(i>=0)
    {
 int s=c+a[i];
       ar[n]=s%10;
       s=s/10;
       c=s;
       n--;i--;
    }
    for(int k=0;k<ar.length;k++)
    {
        System.out.println(ar[k]);
    }
    // write your code here
 }

}