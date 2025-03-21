import React, {ChangeEvent, MouseEvent} from 'react';

export const User = () => {
  const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    alert(e.currentTarget.name)
  }

  const onNameChanged = () => {
    console.log('Name changed')
  }

  const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`age changed: ${e.currentTarget.value}`)
  }

  const focusLostHandler = () => {
    console.log('Focus lost')
  }

  return (
    <div>
      <textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}>
          Dimych
      </textarea>
      <div>
        <input onChange={onAgeChanged} type={'number'}/>
      </div>
      <button name={'save'} onClick={deleteUser}>x</button>
      <button name={'delete'} onClick={deleteUser}>x</button>
    </div>
  )
}