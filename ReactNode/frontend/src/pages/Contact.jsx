import React from 'react'

const Contact = () => {
  return (
   <>
    <h1>Collect Data Form</h1>
    <form>
       Name <input type="text" id="fname" name="fname" /><br />
       Email<input type="email" id="email" name="email" /><br />
       Number<input type="number" id="number" name="number" /><br />
        <input type="submit" value="Submit" />
    </form>
   </>
  )
}

export default Contact