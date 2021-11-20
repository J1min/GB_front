#include <stdio.h>
#define swap(x,y,t) ((t)=(x), (x)=(y), (y)=(t))
int count;
int partition(int list[], int left,int right)
{
    int pivot,temp,low,high;
    low = left;
    high= right+1;
    pivot=list[left];
    do
    {
        do
        {
            low++; // low 1번 자리에서 시작
        }while(list[low]<pivot); // piv 보다 같거나 큰 수를 찾을 때 까지
        do
        {
            high--; // high n-1번 자리에서 시작
        }while(list[high]>pivot); // piv 보다 같거나 작은 수를 찾을 때 까지

        if(low<high) // high가 low보다 크면 == low가 왼쪽 high가 오른쪽 (정석)일 때
        {
            swap(list[low],list[high],temp); // low high의 값을 변경
        }
    }while(low<high); // high번지가 low번지보다 더 많을 때 
    swap(list[left],list[high],temp); // high와 left의 값을 변경
    return high; // 
}

void quicksort(int list[], int left,int right)
{
    if(left<right)
    {
        int q=partition(list, left, right); // q = 피봇 결정된 값 
        quicksort(list,left,q-1);           // 처음 ~ 피봇 - 1 
        quicksort(list,q+1,right);          // 피봇 + 1 ~ 끝 
    }                                       // 이러면 피봇 제외 반토막 남
    count++;                                // 이때 카운트 ++ 
}                                           // 카운트 = 배열이 반갈죽 당한 횟수


int main()
{
    int list[9]={5,3,8,4,9,1,6,2,7};
    quicksort(list,0,8);
    printf("%d ",count);
    for(int i=0; i<9; i++)
    {
        printf("%d ",list[i]); // 그냥 출력
    }
    return 0;
}