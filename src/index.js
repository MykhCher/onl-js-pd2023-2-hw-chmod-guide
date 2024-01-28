let chmodInput = Number(prompt("Please enter a number to provide permission to user."))

switch (chmodInput) {
    case 0:
        console.log(`${chmodInput}: user now have no permissions (---)`);
        break;
    case 1:
        console.log(`${chmodInput}: user now can execute file (--x)`);
        break;
    case 2:
        console.log(`${chmodInput}: user now can write into file (-w-)`);
        break;
    case 3:
        console.log(`${chmodInput}: user now can write into file and execute it (-wx)`);
        break;
    case 4:
        console.log(`${chmodInput} user now can read file (r--)`);
        break;
    case 5:
        console.log(`${chmodInput}: user now can read file and execute it (r-x)`);
        break;
    case 6:
        console.log(`${chmodInput}: user now can write into file and read it (rw-)`);
        break;
    case 7:
        console.log(`${chmodInput}: user have all permissions.`);
        break;

    default:
        if (Number.isNaN(chmodInput)) {
            console.log(`Warning: Got ${chmodInput}! Please enter a number.`);
            break;
        }
        console.log('Warning: Got unexpected value! Please enter a number between 0 and 7.')
        break;
}