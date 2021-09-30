import { useState, useEffect } from "react";

export function useSetPageTitle(initTitle) {
  const [title, setTitle] = useState(initTitle || '默认标题');
  useEffect(() => {
    document.title = title;
  }, [title]);
  return [title, setTitle]
}

export function useMount(fn) {
  useEffect(() => {
    fn()
  }, [])
}
export function useUnmount(fn) {
  useEffect(() => {
    return () => {
      fn();
    }
  }, [])
}
export function useOnResize(fn) {
  useEffect(() => {
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [])
}