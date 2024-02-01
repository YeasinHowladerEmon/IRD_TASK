import React from 'react';

const Header1 = () => {
    return (
        <div>
            <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-[60px] items-center border-b px-6">
                            <Link className="flex items-center gap-2 font-semibold" href="#">
                                <Package2Icon className="h-6 w-6" />
                                <span className="">Acme Inc</span>
                            </Link>
                            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                                <BellIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle notifications</span>
                            </Button>
                        </div>
                        <div className="flex-1 overflow-auto py-2">
                            <nav className="grid items-start px-4 text-sm font-medium">
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <HomeIcon className="h-4 w-4" />
                                    Home
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <ShoppingCartIcon className="h-4 w-4" />
                                    Orders
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <PackageIcon className="h-4 w-4" />
                                    Products
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <UsersIcon className="h-4 w-4" />
                                    Customers
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <LineChartIcon className="h-4 w-4" />
                                    Analytics
                                </Link>
                            </nav>
                        </div>
                        <div className="mt-auto p-4">
                            <Card>
                                <CardHeader className="pb-4">
                                    <CardTitle>Upgrade to Pro</CardTitle>
                                    <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full" size="sm">
                                        Upgrade
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                        <Link className="lg:hidden" href="#">
                            <Package2Icon className="h-6 w-6" />
                            <span className="sr-only">Home</span>
                        </Link>
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <Input
                                        className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                                        placeholder="Search products..."
                                        type="search"
                                    />
                                </div>
                            </form>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <img
                                        alt="Avatar"
                                        className="rounded-full"
                                        height="32"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "32/32",
                                            objectFit: "cover",
                                        }}
                                        width="32"
                                    />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                        <div className="flex items-center">
                            <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
                            <Button className="ml-auto" size="sm">
                                Add product
                            </Button>
                        </div>
                        <div className="border shadow-sm rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[80px]">Image</TableHead>
                                        <TableHead className="max-w-[150px]">Name</TableHead>
                                        <TableHead className="hidden md:table-cell">Status</TableHead>
                                        <TableHead className="hidden md:table-cell">Inventory</TableHead>
                                        <TableHead>Vendor</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <img
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">Glimmer Lamps</TableCell>
                                        <TableCell className="hidden md:table-cell">In Production</TableCell>
                                        <TableCell>500 in stock</TableCell>
                                        <TableCell className="hidden md:table-cell">Luminance Creations</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <img
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">Aqua Filters</TableCell>
                                        <TableCell className="hidden md:table-cell">Available for Order</TableCell>
                                        <TableCell>750 in stock</TableCell>
                                        <TableCell className="hidden md:table-cell">HydraClean Solutions</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <img
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">Eco Planters</TableCell>
                                        <TableCell className="hidden md:table-cell">Backordered</TableCell>
                                        <TableCell>300 in stock</TableCell>
                                        <TableCell className="hidden md:table-cell">GreenGrowth Designers</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <img
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">Zest Juicers</TableCell>
                                        <TableCell className="hidden md:table-cell">Newly Launched</TableCell>
                                        <TableCell>1000 in stock</TableCell>
                                        <TableCell className="hidden md:table-cell">FreshTech Appliances</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <img
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">Flexi Wearables</TableCell>
                                        <TableCell className="hidden md:table-cell">Selling Fast</TableCell>
                                        <TableCell>200 in stock</TableCell>
                                        <TableCell className="hidden md:table-cell">Vitality Gear Co.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Header1;