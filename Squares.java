import java.util.*;

class Squares{
static void perfectSquares(int l, int r){
	for (int i = l; i <= r; i++)
	{
		if (Math.sqrt(i) == (int)Math.sqrt(i))
			System.out.print(i + " ");
	}
}
public static void main (String[] args)
{
	int l = 1, r = 100;
	perfectSquares(l, r);
}
}
