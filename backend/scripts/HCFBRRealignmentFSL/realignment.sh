#!/bin/bash

#Michael Ranasinghe
#10/1/2020

# -------------

# We've heavily commented this code for you. Feel free to ignore it should you already have an understanding.

#FSL is an open source library of neuroimage library tools for MRI, FMRI brain imaging data.
#If you have not already installed FSL onto your desktop, please visit https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation.

#This script will realign the PET frames to a reference frame. In our example, the reference frame is taken to be the first frame.
#This is a standard reference choice you will see in practice.
#Realignment is used to account for patient motion within the scan. Duration of PET scans can vary, but more often than not, scans last for more 
#than 60 mins. During this time, patients can move their head around. To correct for this motion, we can implement realignment 

# -------------


# First, we're going to make some variables.
# PETfilename is the corresponding PET image file name.
# This is the PET image where we would like to realign all PET frames to a reference. 

PETfilename="YC101437_50_60_Florebetapir_PET.nii"

# Reference frame to specify

ref="first"


# We've assigned the software to be mcflirt. As you'll see in other demos available in the web app, there
# are other softwares that can be obtained from the FSL library. 
# FNIRT, FLIRT are to name a few.
# MCFLIRT is a standard FSL package to perform motion correction

software="mcflirt" 

# RegisteredPETname is the output PET file 
RealignedPETname="RealignedPET.nii"


# FSL is a command line operated software
# The general format is the following: software (flirt,fnirt,mcflirt,etc), reference image, input image, output image, additional optional features based on software used

# In our example notice the following:
# 		(1) to indicate a reference frame we use "-refvol" followed by the reference frame number. 
#		(2) Similar can be seen for "-in", "-out" for input, output images, respectively

# This is a common syntax style to take I/O arguments in FSL, and in most command line driven software

$software -in $PETfilename -refvol $ref -out $RealignedPETname 