#include <stdio.h>
int main()
{
    int i,j,n=4,temp,key;
    int list[4]={5,4,2,1};
    for(i=1; i<n; i++)
    {
        key=list[i];
        for(j=i-1; j>=0 && list[j]>key; j--)
        {
            list[j+1]=list[j];
        }
        list[j+1]=key;
    }
    for(i=0; i<n; i++)
    {
        printf("%d ",list[i]);
    }
    return 0;
}