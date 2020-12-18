#!/bin/bash

#Michael Ranasinghe
#10/1/2020

# -------------

# We've heavily commented this code for you. Feel free to ignore it should you already have an understanding.

#FSL is an open source library of neuroimage library tools for MRI, FMRI brain imaging data.
#If you have not already installed FSL onto your desktop, please visit https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation.

# This script will normalize the given PET image to a reference MR. 

# Normalization is used to transform one image domain into a chosen reference domain (in our case, the patient MR). 
# At each pixel, there is a nonlinear function applied to map the input pixel to "match" the respective reference pixel. 
# Notice that the output image will be the same dimensions as the chosen reference. 

# To correctly perform a normalization procedure, it is typical to calculate a mean PET image prior to applying normalization. 
# Essentially, if you have a PET image with multiple frames, you calculate the average value of all frames to obtain a PET image with one frame. 

# We'll walk through this entire procedure!

# -------------


# First, we're going to make some variables.
# PETfilename is the corresponding PET image file name.
# This is the PET image where  to normalize to the MR image. 

# MRfilename is the corresponding MR image file name.

# meanPET is a generated mean image (which is described in line 40-46)

PETfilename="105858_50_60_Florebetapir_PET.nii"
MRfilename="105858_MR.nii"
meanPET="meanPET.nii"


# As mentioned, we are going to need to calculate an average PET image. 
# This is very simple to do in FSL. We will utilize FSL's math set of tools

# Notice, here the input image is the variable "PETfilename". 
# The generated output mean image is the variable "meanPET"
# Unfortunately, in fslmaths, there are no parameter specifiers (ie -in, -out, etc)

fslmaths $PETfilename -Tmean $meanPET


# We've assigned the software to be fnirt. As you'll see in other demos available in the web app, there
# are other softwares that can be obtained from the FSL library. 
# MCFLIRT, FLIRT are to name a few.

# FNIRT is a standard FSL package to perform image normalization.

software="fnirt" 

# NormalizedPETname is the output PET file which has been normalized into MR space.
NormalizedPETname="NormalizedPETtoMR.nii"


# FSL is a command line operated software.
# The general format is the following: software (flirt,fnirt,mcflirt,etc), reference image, input image, output image, additional optional features based on software used.

# In our example notice the following:
# 		(1) to indicate the input image we use "--in" followed by the input image name. 
#		(2) Similar can be seen for --ref where ref denotes the image in which we would like to normalize into.

# This is a common syntax style to take I/O arguments in FSL, and in most command line driven software

$software --in=$meanPET --ref=$MRfilename --iout=$NormalizedPETname

