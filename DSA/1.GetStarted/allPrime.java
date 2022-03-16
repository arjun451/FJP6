import java.util.*;

public class Main{
    public static void main(String[] args) {
        // write your code here
        Scanner scn= new Scanner(System.in);
        int low=scn.nextInt();
        int hi = scn.nextInt();
        for(int i=low;i<=hi;i++)
        {
            int t=1;
            for(int j=2;j*j<=i;j++)
            {
                if(i%j==0)
                {
                    t=-1;break;
                }
            }
            if(t==1)
            System.out.println(i);
        }
    }
}