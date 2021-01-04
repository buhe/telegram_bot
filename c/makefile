#
# This is an example Makefile for a countwords program.  This
# program uses both the scanner module and a counter module.
# Typing 'make' or 'make count' will create the executable file.
#

# define some Makefile variables for the compiler and compiler flags
# to use Makefile variables later in the Makefile: $()
#
#  -g    adds debugging information to the executable file
#  -Wall turns on most, but not all, compiler warnings
#
# for C++ define  CC = g++
CC = gcc
CFLAGS  = -g -Wall

# typing 'make' will invoke the first target entry in the file 
# (in this case the default target entry)
# you can name this target entry anything, but "default" or "all"
# are the most commonly used names by convention
#
default: go

# To create the executable file count we need the object files
# countwords.o, counter.o, and scanner.o:
#
go:  go.o
	$(CC) $(CFLAGS) -o go go.o

# To create the object file countwords.o, we need the source
# files countwords.c, scanner.h, and counter.h:
#
go.o:  go.c
	$(CC) $(CFLAGS) -c go.c
#
clean: 
	$(RM) go *.o *~