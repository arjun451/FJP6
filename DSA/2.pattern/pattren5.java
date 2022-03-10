import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

       int n= scn.nextInt();
       int spaces = n/2;
       int st=1;
       for(int i=1;i<=n;i++)
       {
          if(i<=n/2)
          {
            for(int j=1;j<=spaces;j++)
            {
               System.out.print("\t");
            }
            for(int j=1;j<=st;j++)
            {
              System.out.print("*\t");
            }
            spaces = spaces-1;
            st=st+2;
          }
          else if(i==n/2+1)
          {
            for(int j=1;j<=st;j++)
            {
             System.out.print("*\t");
            }
            st = st-2;
            spaces=1;
          }
          else
          {
           for(int j=1;j<=spaces;j++)
           {
              System.out.print("\t");
           }
           for(int j=1;j<=st;j++)
           {
              System.out.print("*\t");
           }
           spaces=spaces+1;
           st=st-2;
          }
          System.out.println();
       }
    }
}