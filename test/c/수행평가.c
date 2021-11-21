#include <stdio.h>
#include <stdlib.h>
typedef int ELEMENT;
typedef struct queue{
	ELEMENT * buf;
	int front;
	int rear;
	int size;
}QUEUE;
QUEUE * createQueue( int n );
int isFull( QUEUE *q );
void enQueue( QUEUE *q, ELEMENT data );
int isEmpty( QUEUE *q );
ELEMENT deQueue( QUEUE *q );
void destroyQueue( QUEUE * q );
void printAll( QUEUE *q );
int main() {
	QUEUE *q;
	ELEMENT data;
	
	q = createQueue( 5 );
	enQueue( q, 10 ) ;
	enQueue( q, 20 ) ;
	enQueue( q, 30 ) ;
	enQueue( q, 40 ) ;
	enQueue( q, 50 ) ;
	data = deQueue( q );
	if( data ) printf("%d\n", data );
	enQueue( q, 60 ) ;
	printAll( q );
	destroyQueue( q );
	return 0;
}
QUEUE * createQueue( int n ){
	QUEUE *temp = (QUEUE *) malloc( sizeof(QUEUE) );
	temp -> size = n;
	temp -> rear = -1;
	temp -> front = -1;
	temp -> buf = (ELEMENT *) malloc( sizeof(QUEUE) * n ); // 크기 n 을 가지는 동적 배열 생성
	return temp;
}
int isFull( QUEUE *q ){
	// 큐가 가득 차 있다면 rear 은 어떤 상태일까?
	return q->rear == q->size-1;
}
void enQueue( QUEUE *q, ELEMENT data ){
	 // 가득 차 있다면 "queue is full"이라고 출력
	 // 아니면 rear에 data 삽입
	if(isFull(q)) {
		printf("Queue is full\n");
		return;
	}
	q->buf[++(q->rear)] = data; 
}
int isEmpty( QUEUE *q ){
	return q->rear==q->front;
	// 큐가 비어 있따면 rear과 front 는 어떤 상태일까?
}
ELEMENT deQueue( QUEUE *q ){
	if(isEmpty(q)) {
		printf("Queue is empty\n");
	}
	return q->buf[++(q->front)];
	// 비어 있다면 "Queue is empty" 출력하고 0 리턴
  // 아니면 front위치의 데이터 리턴
}
void printAll( QUEUE *q ){
	for(int i = q->front+1; i <= q->rear; i++) {
		printf("%d ",q->buf[i]);
	}
}
void destroyQueue( QUEUE * q ){
	// buf 동적 메모리 해제
	free(q->buf);
	// q 동적 메모리 해제
	free(q);
} 