import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n=scn.nextInt();
    int[] ar=new int[n];
    for(int i=0;i<n;i++)
    {
        ar[i]=scn.nextInt();
    }
    int d=scn.nextInt();
    System.out.print(findele(ar,d));
 }
 public static int findele(int ar[],int d)
{
    int indx=-1;
    for(int i=0;i<ar.length;i++)
    {
        if(ar[i]==d)
        {
          return i;
        }
    }
    return indx;
}
}