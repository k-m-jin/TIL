// d.ts 타입의 모읍 파일
//트리플슬래시 태그 : ts 에서
/// <reference types="vite/client" />
// 뷰라는 확장자 파일을 이해하게 도와주는
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
