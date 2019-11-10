import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startSetTasks } from '../actions/tasks';

const Container = ({ children }) => {
      const dispatch = useDispatch()
      useEffect(() => {
        dispatch(startSetTasks());
      })
      return children;
}

export default Container;