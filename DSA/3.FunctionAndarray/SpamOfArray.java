import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n= scn.nextInt();
    int[] ar=new int[n];
    for(int i=0;i<n;i++)
    {
        ar[i]=scn.nextInt();
    }
    System.out.print(SpamofArray(ar));
 }
public static int SpamofArray(int ar[])
{
    int mx=ar[0],mi=ar[0];
    for(int i=1;i<ar.length;i++)
    {
        if(ar[i]>mx)
        mx=ar[i];
        if(ar[i]<mi)
        mi=ar[i];
    }
    return mx-mi;
}
}